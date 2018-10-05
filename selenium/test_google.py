from selenium import webdriver
from tester import run
from google_testcase import GoogleTestcase

safari = webdriver.Safari()
google_testcase = GoogleTestcase()
run(safari, google_testcase)
