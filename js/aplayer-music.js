const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        url: 'https://m701.music.126.net/20220604194712/98176002e02dbd7a2ed8f93b8b99c506/jdyyaac/0608/525f/0159/1b9ea4ee07e5c709f0f2633181f994e0.m4a',
        cover: 'https://p2.music.126.net/JCByvg7bzHn26WOQI7b-AQ==/1766915185845816.jpg?param=200y200',
    }, 
	]
});