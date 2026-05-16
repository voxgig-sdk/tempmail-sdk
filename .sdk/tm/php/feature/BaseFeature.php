<?php
declare(strict_types=1);

// Tempmail SDK base feature

class TempmailBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TempmailContext $ctx, array $options): void {}
    public function PostConstruct(TempmailContext $ctx): void {}
    public function PostConstructEntity(TempmailContext $ctx): void {}
    public function SetData(TempmailContext $ctx): void {}
    public function GetData(TempmailContext $ctx): void {}
    public function GetMatch(TempmailContext $ctx): void {}
    public function SetMatch(TempmailContext $ctx): void {}
    public function PrePoint(TempmailContext $ctx): void {}
    public function PreSpec(TempmailContext $ctx): void {}
    public function PreRequest(TempmailContext $ctx): void {}
    public function PreResponse(TempmailContext $ctx): void {}
    public function PreResult(TempmailContext $ctx): void {}
    public function PreDone(TempmailContext $ctx): void {}
    public function PreUnexpected(TempmailContext $ctx): void {}
}
