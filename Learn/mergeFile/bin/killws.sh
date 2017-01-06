#!/bin/sh
if [-f "pid"]
then
    kill $(tr -d '\rn' < pid)
    rm pid
fi
