# JUNK FILE ORGANISER

* The project is all about how we have to organise the file on different criteria such as Organising on the basis of Size and Organising on 
the basis of Extension.

  
# Instructions to run the file on Linux OS

* Step 1: First step is to rename the file as per the convenience of the user by using "mv Junk_File_Organiser.py (new)filename" with or without extension. <br>For example:<br> **mv Junk_File_Organiser.py Junk_File_Organiser**
* Step 2: Then we have to change our file in the executable mode and this can be achieved by command <br>**chmod +x filename** (in Linux).<br> For example:<br> **chmod +x Junk_File_Organiser** 
* Step 3: Further we have to copy the filename into /bin by using **sudo cp filename ~bin/** . <br>For example:<br> **sudo cp Junk_File_Organiser ~bin/**
* Step 4: Once we have copied, we can come to home by using command **cd**
* Step 5: Next step is to type the filename directly and user can also view the help by using **filename --help** <br>For example:<br> **Junk_File_Organiser --help**
* Step 6: In next step the user have to put the path by using **filename -p path** command <br>For example:<br> **Junk_File_Organiser -p path(to be given by user)**
* Step 7: After adding the path, the user have to put -o which suggest to organise and along with that the user also specify the number 0 or 1. Here 0 is for Organising the file according to size and 1 to organising the file acccording to extension.  The command goes like this- **filename -p path -o** <br>For example:<br> **Junk_File_Organiser -p path(to be given by user) -o 0 or 1**
* Step 8: The command for the above is **filename -p path -o 0** for organising the file according to size and command **filename -p path -o 1** for organising the file according to extension.<br>For example:<br> **Junk_File_Organiser -p path(to be given by user) -o 0/1**

* **Additional** : If the user don't give -o argument and the number(0 or 1) in this case then by default it will organise the file according to size. For instance if I will give **filename -p path** then by default it will organise the file by size.
