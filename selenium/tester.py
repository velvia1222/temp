def run(driver, testcase):
    try:
        testcase.test(driver)
    finally:
        driver.close()
