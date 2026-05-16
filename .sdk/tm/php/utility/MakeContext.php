<?php
declare(strict_types=1);

// Tempmail SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TempmailMakeContext
{
    public static function call(array $ctxmap, ?TempmailContext $basectx): TempmailContext
    {
        return new TempmailContext($ctxmap, $basectx);
    }
}
