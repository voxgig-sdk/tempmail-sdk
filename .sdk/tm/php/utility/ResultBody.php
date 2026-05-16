<?php
declare(strict_types=1);

// Tempmail SDK utility: result_body

class TempmailResultBody
{
    public static function call(TempmailContext $ctx): ?TempmailResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
