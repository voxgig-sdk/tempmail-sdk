<?php
declare(strict_types=1);

// Tempmail SDK utility: feature_hook

class TempmailFeatureHook
{
    public static function call(TempmailContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
