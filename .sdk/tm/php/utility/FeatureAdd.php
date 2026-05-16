<?php
declare(strict_types=1);

// Tempmail SDK utility: feature_add

class TempmailFeatureAdd
{
    public static function call(TempmailContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
