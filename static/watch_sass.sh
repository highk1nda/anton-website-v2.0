#!/bin/bash
echo
echo =-=-=-=-=-=
echo
echo "Hi Anton!"
echo "Speed-running the Website huh?"
echo "Good luck!"
echo
echo =-=-=-=-=-=
echo

# Compile everything through the single entry point.
# main.scss imports all partials (_base, _nav, _home, _experience, _about, _contacts, _footer).
sass --watch scss/main.scss css/main.css

