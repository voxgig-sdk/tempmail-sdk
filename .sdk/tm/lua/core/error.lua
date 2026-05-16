-- Tempmail SDK error

local TempmailError = {}
TempmailError.__index = TempmailError


function TempmailError.new(code, msg, ctx)
  local self = setmetatable({}, TempmailError)
  self.is_sdk_error = true
  self.sdk = "Tempmail"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TempmailError:error()
  return self.msg
end


function TempmailError:__tostring()
  return self.msg
end


return TempmailError
