# Tempmail SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TempmailFeatures
  def self.make_feature(name)
    case name
    when "base"
      TempmailBaseFeature.new
    when "test"
      TempmailTestFeature.new
    else
      TempmailBaseFeature.new
    end
  end
end
