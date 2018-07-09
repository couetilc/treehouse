# Connor's Treehouse
###### Personal Website by CRC


## Setting up Flask Virtual Environment
Navigate to site's root folder and run
```Shell
$ python3 -m venv flask
```
Navigate to virtual environment folder and install the following packages:
```Shell
$ flask/bin/pip install flask
```

## Running the Treehouse application
Make initializer scripts executable
```Shell
$ chmod 744 run.py
```
Start the application
```Shell
$ ./run.py
```

## Config Information
Place config.py in root app directory.
Must contain the following information:
```
* CONTACT_EMAIL
```
