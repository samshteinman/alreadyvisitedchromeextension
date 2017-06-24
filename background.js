chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
	if (changeInfo.status == 'complete')
	{
	chrome.history.getVisits({url: tab.url}, function(results)
		{	
			if(results.length > 1)
			{				
				chrome.tabs.executeScript(tabId, {
    code: 'var div=document.createElement("div"); document.body.append(div); div.innerText="BEEN HERE BEFORE"; div.style.fontSize = "100px";'
  });
			}
			else
	{
		chrome.tabs.executeScript(tabId,{
code: 'var div=document.createElement("div"); document.body.append(div); div.innerText="NOT BEEN HERE BEFORE"; div.style.fontSize = "100px";'
  });
			}
		});	
	}
});