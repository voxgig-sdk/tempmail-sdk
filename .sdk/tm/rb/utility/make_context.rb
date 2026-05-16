# Tempmail SDK utility: make_context
require_relative '../core/context'
module TempmailUtilities
  MakeContext = ->(ctxmap, basectx) {
    TempmailContext.new(ctxmap, basectx)
  }
end
