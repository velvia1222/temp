class GoogleTestcase:
    def test(self, driver):
        driver.get('https://www.google.co.jp')
        assert "Google" in driver.title
        assert "Google!!!" in driver.title
