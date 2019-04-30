# encoding=utf8
"""Route declarations for the Bracket site."""

# bracket is the package that instantiates and configures the the flask app with
# boilerplate logic for auth, intl routes, and static file serving stuff.
#
# intl:     Flask blueprint for intl routes.
# kcs:      Wrapper for the kcs rest api.
# root:     Flask blueprint for root routes.
import bracket
from bracket import intl
from bracket import kcs
from bracket import root
import flask

import data.nav
import data.common
import data.hero
import data.overview
import data.carousel

nav = data.nav.nav
content = data.common.content
hero = data.hero.hero
overview = data.overview.overview
carousel = data.carousel.carousel

global_site_vars = {
    'angular_version': '1.6.6',
    'glue_version': 'v18_3'
}

#########
######### Routes for the website.
#########



@root.route('/')
@intl.route('/')
def index():

    return flask.render_template('index.jinja',
      nav=nav,
      content=content,
      hero=hero,
      overview=overview,
      carousel=carousel,
      vars=global_site_vars,
        )

bracket.run()
