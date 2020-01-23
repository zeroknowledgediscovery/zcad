This will contain important notes for running.

# Running Website

* Change directory to `ptsd_diagnosis.html`
* Run: `python -m http.server 8000` to mimick a webserver
* Open the `ptsd_diagnosis.html` file at:
    * `http://0.0.0.0:8000/ptsd_diagnosis.html`



# Running Tests

* Click [here](http://www.protractortest.org/#/tutorial) for starting up protractor (and setting things up). 
    * If there is a problem trying to install something, using `sudo` will help.
    * If something doesn't work, try redownloading everything.

Versions that I have:
* Protractor: 5.4.2 
    * `protractor --version`
* Node: v10.16.1
    * `node --version`
* Java: 13.0.2
    * `java -version`

* run `webdriver-manager start` on one terminal to start the server for running tests.
* make sure the website is running (see `Running Website`)
* important notes to consider: 
    * we might need to change the website link at `js/tests/test_questions.js`

