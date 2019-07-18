(function(){
    //统计代码
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?074e20c77711b699f5f2a42913589b6e";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    if(typeof Gitalk !== 'undefined'){
        //评论框
        var gitalk = new Gitalk({
            clientID: 'ace185d1e26023f920e5',
            clientSecret: '7a280009fd608478c9364362cbf961962c3f58f1',
            repo: 'liucong1.github.io',
            owner: 'liucong1',
            admin: ['liucong1'],
            id: location.pathname,      // Ensure uniqueness and length less than 50
            distractionFreeMode: false  // Facebook-like distraction free mode
        });
        gitalk.render('gitalk-container');
    }

    //搜索框
    const sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        searchResultTemplate: '<li class="search-result-list"><a href="{url}" title="{title}">{title}</a></li>',
        noResultsText: '',
    });
})()
