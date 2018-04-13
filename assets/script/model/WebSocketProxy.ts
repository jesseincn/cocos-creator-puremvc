import ReconnectingWebSocket from "../utils/ReconnectingWebSocket";

export default class WebSocketProxy extends puremvc.Proxy implements puremvc.IProxy {
    public static NAME: string = "WebSocketProxy";

    private _ws: ReconnectingWebSocket;

    public constructor() {
        super(WebSocketProxy.NAME);
        ReconnectingWebSocket.debugAll = true;
        this._ws = new ReconnectingWebSocket('ws://echo.websocket.org');
        this._ws.onopen = this.onopen.bind(this);
        this._ws.onmessage = this.onmessage.bind(this);
    }

    private onopen(event: Event) {
        this._ws.send({k: 'val'});
    }

    private onmessage(data: any) {
        cc.log(data);
    }
}