# Tempmail SDK exists test

require "minitest/autorun"
require_relative "../Tempmail_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TempmailSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
