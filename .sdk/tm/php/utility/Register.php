<?php
declare(strict_types=1);

// Tempmail SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TempmailUtility::setRegistrar(function (TempmailUtility $u): void {
    $u->clean = [TempmailClean::class, 'call'];
    $u->done = [TempmailDone::class, 'call'];
    $u->make_error = [TempmailMakeError::class, 'call'];
    $u->feature_add = [TempmailFeatureAdd::class, 'call'];
    $u->feature_hook = [TempmailFeatureHook::class, 'call'];
    $u->feature_init = [TempmailFeatureInit::class, 'call'];
    $u->fetcher = [TempmailFetcher::class, 'call'];
    $u->make_fetch_def = [TempmailMakeFetchDef::class, 'call'];
    $u->make_context = [TempmailMakeContext::class, 'call'];
    $u->make_options = [TempmailMakeOptions::class, 'call'];
    $u->make_request = [TempmailMakeRequest::class, 'call'];
    $u->make_response = [TempmailMakeResponse::class, 'call'];
    $u->make_result = [TempmailMakeResult::class, 'call'];
    $u->make_point = [TempmailMakePoint::class, 'call'];
    $u->make_spec = [TempmailMakeSpec::class, 'call'];
    $u->make_url = [TempmailMakeUrl::class, 'call'];
    $u->param = [TempmailParam::class, 'call'];
    $u->prepare_auth = [TempmailPrepareAuth::class, 'call'];
    $u->prepare_body = [TempmailPrepareBody::class, 'call'];
    $u->prepare_headers = [TempmailPrepareHeaders::class, 'call'];
    $u->prepare_method = [TempmailPrepareMethod::class, 'call'];
    $u->prepare_params = [TempmailPrepareParams::class, 'call'];
    $u->prepare_path = [TempmailPreparePath::class, 'call'];
    $u->prepare_query = [TempmailPrepareQuery::class, 'call'];
    $u->result_basic = [TempmailResultBasic::class, 'call'];
    $u->result_body = [TempmailResultBody::class, 'call'];
    $u->result_headers = [TempmailResultHeaders::class, 'call'];
    $u->transform_request = [TempmailTransformRequest::class, 'call'];
    $u->transform_response = [TempmailTransformResponse::class, 'call'];
});
