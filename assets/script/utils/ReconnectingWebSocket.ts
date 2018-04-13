export default class ReconnectingWebSocket {
    public static debugAll: boolean = false;

    private ws: WebSocket;
    private debug: boolean = false;
    private reconnectInterval: number = 1000;
    private timeoutInterval: number = 2000;
    private forcedClose: boolean = false;
    private timedOut: boolean = false;
    private protocols = [];
    private url: string;
    private readyState: number;

    public onopen(event: Event) {
    }

    public onclose(event: Event) {
    }

    public onconnecting() {
    }

    public onmessage(event: MessageEvent) {
    }

    public onerror(event: Event) {
    }

    public constructor(url: string, protocols = []) {
        this.url = url;
        this.protocols = protocols;
        this.readyState = WebSocket.CONNECTING;
        this.connect(false);
    }

    private connect(reconnectAttempt) {
        this.ws = new WebSocket(this.url, this.protocols);

        this.onconnecting();
        this.log('ReconnectingWebSocket', 'attempt-connect', this.url);

        let localWs = this.ws;
        let timeout = setTimeout(() => {
            this.log('ReconnectingWebSocket', 'connection-timeout', this.url);
            this.timedOut = true;
            localWs.close();
            this.timedOut = false;
        }, this.timeoutInterval);

        this.ws.onopen = (event) => {
            clearTimeout(timeout);
            this.log('ReconnectingWebSocket', 'onopen', this.url);
            this.readyState = WebSocket.OPEN;
            reconnectAttempt = false;
            this.onopen(event);
        };

        this.ws.onclose = (event) => {
            clearTimeout(timeout);
            this.ws = null;
            if (this.forcedClose) {
                this.readyState = WebSocket.CLOSED;
                this.onclose(event);
            } else {
                this.readyState = WebSocket.CONNECTING;
                this.onconnecting();
                if (!reconnectAttempt && !this.timedOut) {
                    this.log('ReconnectingWebSocket', 'onclose', this.url);
                    this.onclose(event);
                }
                setTimeout(() => {
                    this.connect(true);
                }, this.reconnectInterval);
            }
        };

        this.ws.onmessage = (event: MessageEvent) => {
            let data = this.decode(event.data);

            this.log('ReconnectingWebSocket', 'onmessage', this.url, data);
            this.onmessage(data);
        };

        this.ws.onerror = (event) => {
            this.log('ReconnectingWebSocket', 'onerror', this.url, event);
            this.onerror(event);
        };
    }

    private decode(data) {
        try {
            data = JSON.parse(data);
        } catch (e) {

        }
        return data;
    }

    private encode(data) {
        if (typeof data === 'object') {
            data = JSON.stringify(data);
        }
        return data;
    }

    public send(data) {
        if (this.ws) {
            data = this.encode(data);
            this.log('ReconnectingWebSocket', 'send', this.url, data);
            return this.ws.send(data);
        } else {
            throw new Error('INVALID_STATE_ERR : Pausing to reconnect websocket');
        }
    }

    public close() {
        if (this.ws) {
            this.forcedClose = true;
            this.ws.close();
            return true;
        }
        return false;
    }

    public refresh() {
        if (this.ws) {
            this.ws.close();
            return true;
        }
        return false;
    }

    private log(...args: any[]) {
        if (this.debug || ReconnectingWebSocket.debugAll) {
            console.debug.apply(console, args);
        }
    }
}