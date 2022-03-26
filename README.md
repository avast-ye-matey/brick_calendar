# Bricklist!!!
### (currently designed for mobile use)
<br /><br /><br />


# Table of Contents ![image](https://user-images.githubusercontent.com/84582506/140656970-7cee8afc-a9c3-4d76-a09f-29e2388a9f6f.png) 

[About](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#about)<br />
[What does this program do?](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#whatdoesthisprogramdo)<br />
-- [Visual walkthrough](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#visualwalkthrough)<br />
-- [Text walkthrough](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#textwalkthrough)<br />
[Steps to run program](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#stepstorunprogram)<br />
[Important note](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#importantnote)<br />
[Tested versions](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#testedversions)<br />
[Project Requirements](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#projectrequirements)<br />
-- [Feature List Items Used](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#featurelistitemsused)<br />
[Future Features](https://github.com/avast-ye-matey/LEGO_Website_Search_Scraper#futurefeatures)<br /><br /><br />


<a name="about"></a>
## About ![image](https://user-images.githubusercontent.com/84582506/140657288-1e6790ed-d9e6-4939-8b22-a60c83d392b5.png)
Create and save a LEGO wishlist a.k.a Bricklist! 

<a name="whatdoesthisprogramdo"></a>
## Using this app ![image](https://user-images.githubusercontent.com/84582506/140657268-985e803c-2546-4878-9719-fde4bff3b213.png)
This version's homepage acts as if a user has just signed in. The app welcomes the user back and has them pick between two options: pick a saved Bricklist or create a new one. The saved Bricklist option has a dropdown for saved Bricklists. The create new one option provides a place to enter in the new Bricklist name. 
If the user picks a saved Bricklist, the new landing page is the Bricklist page with all the sets. You can scroll through them (choosing to view by theme or price), delete them off your Bricklist, or use the tab at the bottom of the screen to bring up the Search Sets Drawer. 
If the user picks create new and creates a new Bricklist, the new landing page is the Search Sets Drawer, skipping the blank new Bricklist page. Once the drawer is present, the user can search for LEGO sets to save to their Bricklist. The user can filter
the results with theme and price. They can also add and delete sets from the Bricklist right from the Search Set Drawer. Throughout this process, if any set is added, the Bricklist is autosaved (currently being worked on). If any set is deleted, there is a warning popup (currently being worked on). 
Also at any time, the user can click on the set thumbnail to make image expand full screen and clicking again with minimize it back to regular size. 

<a name="visualwalkthrough"></a>
### Visual walkthrough ![image](https://user-images.githubusercontent.com/84582506/140657181-3320da35-8716-4757-84a2-f4d2af777480.png)<br />
1)  <br />
<img src="jpegs_for_readme/Results_Preview_User_Input.jpg" alt="User Input"
     	title="User Input" /><br />
<br />
<br />
<br />
2) <br />
<img src="jpegs_for_readme/Results_Preview_Terminal.jpg" alt="Terminal Output"
     	title="Terminal Output" /><br />
4) <br />
<img src="jpegs_for_readme/Results_Preview.jpg" alt="Results"
	title="Results"  /><br /><br />
3)  
<img src="jpegs_for_readme/Results_Preview_Closer.jpg" alt="Results Zoomed"
	title="Results Zoomed"  /><br /><br />
	
	
<a name="textwalkthrough"></a>
### Text walkthrough ![image](https://user-images.githubusercontent.com/84582506/140657171-07376016-a0e7-45cf-b9c6-3de48d14d215.png)<br />
This program takes a user input to scrape the LEGO website for sets, price, and availability using the user input. So lets say you want to see what LEGO Harry Potter sets  exist, if they're available (buy now, comming soon, retired, or back ordered), and how much they cost, well just type Harry Potter as your search input when asked. Once the program is done, the results are exported into an `.xlsx` (Excel) document and labeled with today's date and what search input was used. The functionality of the program is based on if you actually were searching the LEGO website. The program scrapes the search function as if you went directly to the Lego website and used the search function. Also the program relies on the Excel file for results and not the terminal (beyond the initial user input). <br /><br /><br />

         
<a name="stepstorunprogram"></a>
## Steps to run program ![image](https://user-images.githubusercontent.com/84582506/140657161-95a95744-6ddd-474b-aa60-243208f8cea4.png)


<a name="importantnote"></a>
## Important note ![image](https://user-images.githubusercontent.com/84582506/140657251-f1f32be7-ed50-4d91-808e-6ed5d2ffba74.png)
<blockquote>
This program relies on the Excel file that is created after the program runs and not on the terminal output. The terminal is only currently used for the user to input the search term they wish to use to search the Lego website. I'm in-between functionalities with the program as I'm switching it to be user facing (web app) and NOT to be used in the terminal. I have cleaned up a lot of random terminal output I use for testing so the user can watch the results live but some random print functions may show.<br /><br />

I leave myself a lot of notes and use the print function after almost every line to help me debug. I deleted most comments but some may still be in the code. Also most of the testing print functions are commented out, but still some testing output may find its way on the terminal. 
</blockquote><br /><br /><br />


<a name="testedversions"></a>
## Tested versions ![image](https://user-images.githubusercontent.com/84582506/140657133-8f88fdf2-57ed-4430-b48d-ec4f68d002e2.png)





<a name="projectrequirements"></a>
## Project Requirements ![image](https://user-images.githubusercontent.com/84582506/140657109-c2a0a036-ab6d-4185-9935-9345f14001f7.png)
1) ✅ Project is uploaded to your GitHub repository and shows at minimum 5 separate commits
      - Using GitHub’s file uploader does not count as a check-in. You must upload via Git<br />

2) ✅ Project includes a README file that explains the following:
      - A one paragraph or longer description of what your project is about.
      - Relevant packages that need installed to run the project.
      - Which 3+ features you have included from the below lists to meet the requirements
      - Any special instructions required for the reviewer to run your project. (For example: “run python main.py” from the command line)<br />

3) ✅ Choose at least 3 items on the Features List and implement them in your project
      - We recommend you pick a 4th item (or more!) to add, just in case something goes wrong with one of your other items - 3 is only the minimum requirement<br /><br /><br />
      
 
<a name="featurelistitemsused"></a>
### Feature List Items Used ![image](https://user-images.githubusercontent.com/84582506/140657351-81caf107-4fac-405a-9999-41c909351143.png) <br />
1) Create a class, then create at least one object of that class and populate it with data. The value of at least one object must be used somewhere in your code.
2) Create a dictionary or list, populate it with several values, retrieve at least one value, and use it in your program.
3) Create and call at least 3 functions or methods, at least one of which must return a value that is used somewhere else in your code. To clarify, at least one function should be called in your code, that function should calculate, retrieve, or otherwise set the value of a variable or data structure, return a value to where it was called, and use that value somewhere else in your code. For example, you could create a function that reads how many items there are in a text file, returns that value, and later uses that value to execute a loop a certain number of times.
4) (**May Need Mentor Approval**) Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event).<br/>
	- *I pull the current date to add to final `xlsx` file name but don't use it to calculate anything.*
5) (**With Mentor Approval**) Other features can be added to this list with mentor or staff permission, but we want to see you stretch your skills, so you’ll want to pick something challenging.
	- *I export the result lists into a `xlsx` file*
### “Stretch” List Items Used ![image](https://user-images.githubusercontent.com/84582506/141661260-a6eee33c-9a68-4952-af19-e1b47b545257.png) <br />
6) Implement a “scraper” that can be fed a type of file or URL and pull information off of it. For example, a web scraper that lets you provide any website URL and it will find certain keywords on the page.<br /><br /><br />

<a name="futurefeatures"></a>
## Future Features ![image](https://user-images.githubusercontent.com/84582506/140657094-e7b2338a-cf4d-4424-ac24-778a39a90cc6.png)
1) Make a computer version
2) Make an actual application instead of using the web browser
3) add a countdown timer to the sets
4) add a total price feature to the Bricklist