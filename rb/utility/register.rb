# Tempmail SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TempmailUtility.registrar = ->(u) {
  u.clean = TempmailUtilities::Clean
  u.done = TempmailUtilities::Done
  u.make_error = TempmailUtilities::MakeError
  u.feature_add = TempmailUtilities::FeatureAdd
  u.feature_hook = TempmailUtilities::FeatureHook
  u.feature_init = TempmailUtilities::FeatureInit
  u.fetcher = TempmailUtilities::Fetcher
  u.make_fetch_def = TempmailUtilities::MakeFetchDef
  u.make_context = TempmailUtilities::MakeContext
  u.make_options = TempmailUtilities::MakeOptions
  u.make_request = TempmailUtilities::MakeRequest
  u.make_response = TempmailUtilities::MakeResponse
  u.make_result = TempmailUtilities::MakeResult
  u.make_point = TempmailUtilities::MakePoint
  u.make_spec = TempmailUtilities::MakeSpec
  u.make_url = TempmailUtilities::MakeUrl
  u.param = TempmailUtilities::Param
  u.prepare_auth = TempmailUtilities::PrepareAuth
  u.prepare_body = TempmailUtilities::PrepareBody
  u.prepare_headers = TempmailUtilities::PrepareHeaders
  u.prepare_method = TempmailUtilities::PrepareMethod
  u.prepare_params = TempmailUtilities::PrepareParams
  u.prepare_path = TempmailUtilities::PreparePath
  u.prepare_query = TempmailUtilities::PrepareQuery
  u.graphql_body = TempmailUtilities::GraphqlBody
  u.graphql_errors = TempmailUtilities::GraphqlErrors
  u.result_basic = TempmailUtilities::ResultBasic
  u.result_body = TempmailUtilities::ResultBody
  u.result_headers = TempmailUtilities::ResultHeaders
  u.transform_request = TempmailUtilities::TransformRequest
  u.transform_response = TempmailUtilities::TransformResponse
}
