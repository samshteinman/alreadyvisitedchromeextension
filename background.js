chrome.history.onVisited.addListener(function(item)
{
	chrome.history.getVisits({url: item.url}, function(results)
		{
			if(results.length > 1)
			{
				chrome.browserAction.setIcon({path:"visited.png"});
			}
			else
			{
				chrome.browserAction.setIcon({path:"notvisited.png"});
			}
		});
});