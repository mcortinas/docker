#!/bin/bash
set -e

# this if will check if the first argument is a flag
# but only works if all arguments require a hyphenated flag
# -v; -SL; -f arg; etc will work, but not arg1 arg2
if [ "${1:0:1}" = '-' ]; then
    set -- mongod "$@"
fi

# check for the expected command
if [ "$1" = 'mongod' ]; then
    # init db stuff....
    # use gosu to drop to a non-root user
    exec gosu mongod "$@"
fi

# else default to run whatever the user wanted like "bash"
exec "$@"

