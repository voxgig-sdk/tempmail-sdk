<?php
declare(strict_types=1);

// Tempmail SDK utility: prepare_body

class TempmailPrepareBody
{
    public static function call(TempmailContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
