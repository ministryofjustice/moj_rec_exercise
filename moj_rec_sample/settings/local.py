DEBUG = True

# X_FRAME_OPTIONS = 'ALLOW'
#
# SECURE_CONTENT_TYPE_NOSNIFF = False
#
# SECURE_BROWSER_XSS_FILTER = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'moj_rec ',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
