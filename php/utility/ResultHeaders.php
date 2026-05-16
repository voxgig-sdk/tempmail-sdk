<?php
declare(strict_types=1);

// Tempmail SDK utility: result_headers

class TempmailResultHeaders
{
    public static function call(TempmailContext $ctx): ?TempmailResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
