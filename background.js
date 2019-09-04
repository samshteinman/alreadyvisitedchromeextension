chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
	if (changeInfo.status == 'complete')
	{
		chrome.history.getVisits({url: tab.url}, function(results)
		{	
			if(results.length > 1)
			{			
				chrome.browserAction.setIcon({path: "visited.png"});	
			}
			else
			{
				chrome.browserAction.setIcon({path: "notvisited.png"});	
			}
		});	
	}
});
