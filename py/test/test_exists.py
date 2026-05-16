# ProjectName SDK exists test

import pytest
from tempmail_sdk import TempmailSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TempmailSDK.test(None, None)
        assert testsdk is not None
