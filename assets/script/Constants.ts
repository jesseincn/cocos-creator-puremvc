export enum GAME_STATUS {
    START = 'START',
    GAME_OVER = 'GAME_OVER',
    FINISH = 'FINISH',
}

// xhr url && WebSocket url
const DOMAIN = 'localhost';
const xhrBaseURL = 'http://' + DOMAIN + ':80';

export const URL = {
    wsURL: 'ws://' + DOMAIN + ':6000',
    xhrBaseURL: xhrBaseURL,
    Test: xhrBaseURL + '/test/fetch.php',
};