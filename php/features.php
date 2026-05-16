<?php
declare(strict_types=1);

// Tempmail SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TempmailFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TempmailBaseFeature();
            case "test":
                return new TempmailTestFeature();
            default:
                return new TempmailBaseFeature();
        }
    }
}
