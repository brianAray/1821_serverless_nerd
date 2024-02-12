# Essentials

## Directory

- View Files
    - A directory is where all the files are stored
    - When you open a folder on you file explorer, you automatically see all the files inside it
    - This is not done by default with the terminal, to see all the files in the directory (folder) type `ls`
        - `ls` will list all files and other directories inside your current directory
- Move
    - To move into a different directory, use the command `cd`
    - Example: `cd Documents`
        - This command will check to see if there is a directory named Documents from where you currently are
        - If that directory is there (you can check beforehand by using `ls`) then you will now be moved into there
        - If it does not exist then it will say directory not found
    - Example: `cd ..`
        - This command is the same as going backwards or rather you are going up one folder
        - Think of it like boxes inside other boxes, if you are inside one box and want to leave that box into where it is being contained use `cd ..`
    - Example: `cd ../..`
        - This command will make you go up two directories instead of just one
        - This command can be repeated as many times until you hit the root directory

## Files

- Create
    - A simple create is the `touch` command
    - Example: `touch basic_text.txt`
        - This command will create a text file named "basic_text"
        - If you want to create a different type of file, change the file extension (the `.txt` is the file extension)
- Edit
    - To edit a file, we will be using the inbuilt text editor "Vim"
        - Vim is a powerful text editor that has been and still is being used for decades
        - Vim has it's own way of doing things and you will need to learn
        - There is a tutorial if in the terminal you type `vimtutor`
    - To open a file with vim, type `vim name_of_file` Where "name_of_file" includes the extension of the file you wish to open
        - Using the previously created `basic_text.txt` we can open it with `vim basic_text.txt`
        - A shortcut with vim, simply type `vim basic_text_2.txt` and you will create the file at the same time and begin editing it
    - Quick tutorial with Vim
        - To begin typing press `i` or `a`
        - To stop typing press `esc`
        - To leave Vim and save the file type `:wq`
- Copy
    - To copy a file use the command `cp`
    - Example: `cp basic_text.txt basic_text_copy.txt`
        - This will duplicate the `basic_text.txt` and any content of it into a new file named `basic_text_copy.txt`
- Delete
    - To delete a file use the command `rm`
    - Example: `rm basic_text_copy.txt`
        - This will delete the file you have specified
- Rename
    - To rename a file use the command `mv`
    - Example: `mv basic_text.txt updated_name_text.txt`
        - This will move the basic_text.txt contents into a new file named updated_name_text.txt and remove the original file
- Move
    - To move a file use the command `mv`
    - Example: `mv basic_text.txt ..` 
        - This command will move the `basic_text.txt` file up one folder
        - This is the same as using the cut command with a mouse

## Folders / Directories

- Create
    - To create a directory, use the command `mkdir`
    - Example: `mkdir new_directory`
        - This will create a new directory named `new_directory`
- Copy
    - To copy a directory, use the command `cp -R`
    - Example: `cp -R new_directory new_directory_backup`
        - The `-R` is a flag that indicates you want to copy everything recursively
            - This basically means it copies everything inside the folder
        - The second directory shouldn't already exist but when executing the command it will create it and populate it with all the files copied over
- Delete
    - To remove a directory there are two commands `rmdir` and `rm -rf`
    - `rmdir` is for empty directories
        - Example: `rmdir empty_dir`
    - `rm -rf` is for directories that are not
        - Example: `rm -rf not_empty_dir`
        - The `-rf` is a flag that indicates it is removing all the contents inside the directory (including other directories) then remove the directory itself
- Rename
    - To rename a directory use the command `mv`
    - Example: `mv new_directory/ updated_directory_name/`
        - This will move the `new_directory` folder into a new directory named `updated_directory_name` and move all the files too
- Move
    - To move a directory use the command `mv`
    - Example: `mv new_directory ..` 
        - This command will move the `new_directory` file up one folder
        - This is the same as using the cut command with a mouse