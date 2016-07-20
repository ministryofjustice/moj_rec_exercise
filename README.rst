===============================
MOJ Recruitment Sample Exercise
===============================

*DO NOT* put renderable templates in 'dist' folder

Dependencies
============

-  `Python 3.5 <http://www.python.org/>`__ (can be installed using :code:`brew install python3`)
-  `Virtualenv <http://www.virtualenv.org/en/latest/>`__ (can be installed using :code:`pip3 install virtualenv`)
-  `fetch polyfill <https://github.com/github/fetch>`__(can be installed using :code:`npm install whatwg-fetch --save`)
-  `webpack <https://webpack.github.io/>`__(can be installed using :code:`npm install webpack -g`)
-  TBC


Installation
============

Clone the repository:

::

    git clone git@github.com:ministryofjustice/moj-moj_rec_exercise.git

Next, create the environment and start it up:

::

    virtualenv env --python=`which python3`

    source env/bin/activate

Update pip to the latest version:

::

    pip install -U pip

Install python dependencies:

::

    pip install -r requirements/local.txt

Install frontend dependencies:

::

    npm install

Development
============

In addition to running the Django development server (python manage.py runserver) run npm run --watch from the same
directory to ensure that changes to the front-end code are reflected immediately.





