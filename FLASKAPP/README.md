Flask application that asks questions to the user and deploys it to a web server using Gunicorn and Nginx.

1. **Install Flask and Gunicorn:** If you haven't already, install Flask and Gunicorn in your Python environment:

```bash
pip install Flask gunicorn
```

2. **Create the application structure:** Create a new folder for your project and inside that folder, create the following structure:

```
myapp/
│
├── app/
│   ├── __init__.py
│   ├── routes.py
│   ├── templates/
│   │   ├── index.html
│   │   └── result.html
│   └── static/
│
├── config.py
├── wsgi.py
└── requirements.txt
```

3. **Configure the Flask application:** Add the following content to `config.py`:

```python
import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
```

4. **Create the Flask app instance:** Add the following content to `app/__init__.py`:

```python
from flask import Flask
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

from app import routes
```

5. **Implement the application logic:** Add the following content to `app/routes.py`:

```python
from flask import render_template, request, redirect, url_for
import random
from app import app

# Placeholder function for your logic to select the next question
def select_next_question(answers):
    question_bank = [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5'
    ]
    return random.choice(question_bank)

# Placeholder function to compute user characteristics
def compute_user_characteristics(answers):
    return sum(answers.values()) / len(answers)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        question = request.form['question']
        answer = int(request.form['answer'])
        answers = eval(request.form['answers'])
        answers[question] = answer

        if len(answers) < 5: # Change this value based on the desired number of questions
            next_question = select_next_question(answers)
            return render_template('index.html', question=next_question, answers=answers)
        else:
            result = compute_user_characteristics(answers)
            return render_template('result.html', result=result)

    next_question = select_next_question({})
    return render_template('index.html', question=next_question, answers={})
```

6. **Create the HTML templates:** Add the following content to `app/templates/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questionnaire</title>
</head>
<body>
    <h1>{{ question }}</h1>
    <form action="/" method="POST">
        <input type="hidden" name="question" value="{{ question }}">
        <input type="hidden" name="answers" value="{{ answers }}">
        <label for="answer">Your answer:</label>
        <input type="number" name="answer" required>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

Add the following content to `app/templates/result.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
</head>
<body>
    <h1>Your result: {{ result }}</h1>
</body>
</html>
```

7. **Create the WSGI entry point:** Add the following content to `wsgi.py`:

```python
from app import app

if __name__ == "__main__":
    app.run()
```

8. **List the required packages:** Add the following content to `requirements.txt`:

```
Flask==2.1.1
gunicorn==20.1.0
```

9. **Run the application locally:** You can run your application locally using the following command from the project folder:

```bash
python wsgi.py
```

Open your web browser and go to `http://127.0.0.1:5000/` to see the application in action.

10. **Deploy the application using Gunicorn and Nginx:**

This guide assumes you have an Ubuntu server. Adjust the steps accordingly for your specific environment.

a. Install Nginx:

```bash
sudo apt update
sudo apt install nginx
```

b. Transfer your project folder to the server.

c. Navigate to your project folder on the server and install the required dependencies in a virtual environment:

```bash
cd /path/to/your/project/folder
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

d. Test your application with Gunicorn:

```bash
gunicorn --bind 0.0.0.0:8000 wsgi:app
```

If everything is working correctly, you should be able to access the application at `http://your_server_ip:8000`. Press `CTRL+C` to stop Gunicorn.

e. Create a Gunicorn systemd service file:

```bash
sudo nano /etc/systemd/system/myapp.service
```

Add the following content to the file, making sure to replace `/path/to/your/project/folder` with the actual path to your project folder:

```ini
[Unit]
Description=Gunicorn instance to serve myapp
After=network.target

[Service]
User=your_username
Group=www-data
WorkingDirectory=/path/to/your/project/folder
Environment="PATH=/path/to/your/project/folder/venv/bin"
ExecStart=/path/to/your/project/folder/venv/bin/gunicorn --workers 3 --bind unix:myapp.sock -m 007 wsgi:app

[Install]
WantedBy=multi-user.target
```

Save and close the file.

f. Start and enable the Gunicorn service:

```bash
sudo systemctl start myapp
sudo systemctl enable myapp
```

g. Configure Nginx to proxy requests:

```bash
sudo nano /etc/nginx/sites-available/myapp
```

Add the following content to the file, replacing `your_server_ip` and `/path/to/your/project/folder` with the actual values:

```nginx
server {
    listen 80;
    server_name your_server_ip;

    location / {
        include proxy_params;
        proxy_pass http://unix:/path/to/your/project/folder/myapp.sock;
    }
}
```

Save and close the file.

h. Create a symbolic link to enable the Nginx site configuration:

```bash
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled
```

i. Test the Nginx configuration:

```bash
sudo nginx -t
```

If the configuration test is successful, restart Nginx:

```bash
sudo systemctl restart nginx
```

j. Finally, allow traffic through the firewall (if you have one enabled) on port 80:

```bash
sudo ufw allow 'Nginx Full'
```

Now our Flask application should be accessible at `http://your_server_ip` and is ready for production use. We need to replace the placeholder functions with your actual logic.