function findproxyforurl(host,url)
{
if (shexpmatch(host,"*jabil*"))
return "direct"
else if (shexpmatch(host,"192.168.203.143"))
return "proxy 128.0.0.1:1088"
else 
return "proxy 128.0.0.1:1088"