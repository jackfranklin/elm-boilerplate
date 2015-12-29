module Tests where

import ElmTest exposing (..)

import String
import FooTest


all : Test
all =
    suite "A Test Suite"
      [
        FooTest.tests
      ]
