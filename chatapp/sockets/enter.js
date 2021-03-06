'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('enter', function (data) {
        // 自分以外に送信
        socket.broadcast.emit('enter', data);
    });
};
