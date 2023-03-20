# Final Fantasy XIV API
The Final Fantasy API reagrds a game I have extensively played for a few years now, and love. I was having a really rough time finding an API to reach the requirements the course work was asking for. After an extensive search for something i could easily recognize and work with i started my adventure.

### Story ('/Story')
Story provides every main story quest the game offers, and the names of them in their respective languages, Which also includes the description of the quest provided. It was a lot of fun skimming through it, once I completed seeding, to reminisce in a rich story. 

###Story Endpoints
| URL      | Path | Method | Decsription                                                      |
|----------|------|--------|------------------------------------------------------------------|
|/Story    | /    | Get    |                Lists every story quest provided                  |
|/Story/id | /id  | Get    |                 Grabs the specific quest by id                   |
|/Story    | /    | Post   | update/create a new story or pre-existing with info you may have |
|/Story/id | /id  | Delete |                   Delete a specific quest by id                  |

### Achievement ('/achievement')
Achievement provides every acheivement the game offers, and the names of them in their respective languages, Which also include the description of the achievement provided. This in future projects could be useful for users to check their character/id with the achievements they may have earned or not earned. 

###Achievement Endpoints
| URL            | Path | Method | Decsription                                                            |
|----------------|------|--------|------------------------------------------------------------------------|
|/achievement    | /    | Get    |                    Lists every achievement provided                    |
|/achievement/id | /id  | Get    |                   Grabs a specific achievement by id                   |
|/achievement    | /    | Post   | update/create a new achievement or pre-existing with info you may have |
|/achievement/id | /id  | Delete |                   Delete a specific achievement by id                  |

Note: I'm looking to update my work to provide more options in the future, as I would like to grab specific details as needed.

##Learning/Using Axios
Apart of the assignment was to use a Axios fetch, Which took a little digging to understand waht it did, and how to use it. After Using a code example I found, I implented my code with my own. Once fixing the bugs it provided I almost wanted to do it a second time, just for it's ease of use.

###Useful Information
While i feel i have more to learn with API's my ability to use Node, Express, and mongoose are very reliable. When it came to squashing those nasty bugs. I fealt i could easily find and fix those problems and get a positive return out of my project. 
