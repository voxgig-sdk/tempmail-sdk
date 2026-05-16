<?php
declare(strict_types=1);

// Tempmail SDK exists test

require_once __DIR__ . '/../tempmail_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TempmailSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
