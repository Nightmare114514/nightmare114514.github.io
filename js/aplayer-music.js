const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        url: 'https://m10.music.126.net/20220610230637/2060fb2e990108098e705c9b5770bfd3/ymusic/3d4e/8315/28e9/9cb6a7b879d0b7fe37f49348849efca5.mp3',
        cover: 'https://p2.music.126.net/JCByvg7bzHn26WOQI7b-AQ==/1766915185845816.jpg?param=200y200',
    }, 
	]
});