# How to prevent ddos attack?

To prevent DDO attacks, we have to use rate-limit so that we can secure over backend APIs from malicious attacks and we can also handle unwanted request made by the user. For example: We can restrict a user to hit endpoints for a particular number(100 API/day). 

# Difference between Public and Private IP Address?

The scope of Public IP address is global whereas for Private IP address, it is confined to that particular network only. 
Moreover, there is cost associated while using Public IP address but it is free in Private IP Address. 
Public IP address are not free but the latter is free of cost.

# Differentiate between active-active and active-passive load balancer.
In Active-active 2 servers are configured as companion servers and both the servers are having different workloads and run on primary and secondary nodes whereas in active-passive load balancer, a single server either run on primary or secondary node. In active-active, if 1 server fails, other will work and data sent by client won't get effected but this is not the case with the active-passive where the client has to resubmit the data to the server.

# What is the CAP theorem? Which database we should choose to build https://university.attainu.com/ and why?

Consistency: Suppose there are 4 database connected to each other. And I visited a facebook page and liked the post and it got stored in first database and once again I will reload the page and response will be coming from another database. So the post which I have liked will be there whether the response is coming from any of the database server.

Availability: Continuing with the above example, suppose I have all 4 servers at one place and an earthquake occured or terrorist attacks happened at that place, but still the request response chain shouldn't be blocked in case of failure of servers. So all companies keep their servers at different places so that if any one server causes problem, it won't be effecting the request response cycle.

Partition-Tolerance: Suppose there is any network problem in 2-3 machines but still it operates and doesn't effect the request reponse cycle.

I will be using Cassandra as it supports Availability and Partition-Tolerance because whatever conditions occur, the flow won't be effected and this won't cause any problem to the users.

# Please list linux commands or tools to diagnose your application. Please explain in which scenario you will use different commands

1. top: It is used to see which application is running and can see CPU utilization, memory utilization etc.
2. free: It is used to find out how much memory is available.
3. ps: It is used to get all the running process in our machine
4. curl: It is used to test the endpoint.
5. ls: It will give the complete list of files in the directory.
6. history: It will give the history of all the commands.

# Explain round-robin scheduling. Mention where it is used.

It is the process where time is allocated for each process and each process is given to use CPU for a given amount of time and suppose if a process is not complete within the allocated time, it is queued at the end and next process execution will start.
It is used so that all the process get time to execute without any priority. 

For Example: There are 10 process to be executed and time given to each process is 2 seconds. So first process1 will start executing and once the time is done and execution is still pending, it is moved to the end of the queue and process2 starts executing. If process2 executes within 2 seconds, it is popped out from the queue and process3 start executing and so on.

# What is paging and why do we need it?

Paging is the memory management technique wherein memory is divided into fixed size page. Instead of keeping everything in the main memory, the process which is not required is kept in secondary memory and the process which is required is kept in the main memory. It is use to access the data quickly.

# Explain firewalls and what are the different types of it?

Firewalls is a security device which is used to handle the network traffics.Suppose a request is coming from specified IP address, then firewall denies that request and firewall can also deny the request from anyone other than the trusted sources.

Type:

1. Circuit level gateway: It works at session layer of OSI model which keep checks on connections and sessions and ensures that the established connections are safe.

2. Proxy firewalls: Here , the firewall acts as an intermediate between internal and external systems. Whenever a client makes a request, it will make it as its own request  creating substitute for the client.

3. Cloud Firewalls: These firewalls are maintained and runned by the 3rd party vendors and these firewalls are used as Proxy firewalls but the configuration might vary accordingly.


# Explain caching and where it is used?

It is a reserved storage of data so that it can be accessed later and also helps to load the page,apps faster.The benefits of cache is to improve the performance of the system, It saves frequent data and in some cases it allows app to run offline too.

It is used in web browsers and in apllication.

Web browsers: Many of the browsers whether it is Chrome,firefox,Safari maitains the Cache data. It includes CSS, Javascript ,cookies , images etc. For example: If i visit an e-commerce website, the landing page contents such as images, css will be stored in cache memory and next time if i open the same website, it will be loaded fast as data will be coming from cache storage.

Apps:Apps also saves the data whichever is required so that it can be quickly loaded as needed. The data stored in cache will differ on the basis of application.




