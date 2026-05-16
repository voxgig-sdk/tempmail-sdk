package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDomainEntityFunc func(client *TempmailSDK, entopts map[string]any) TempmailEntity

var NewEmailEntityFunc func(client *TempmailSDK, entopts map[string]any) TempmailEntity

var NewInboxEntityFunc func(client *TempmailSDK, entopts map[string]any) TempmailEntity

var NewMessageEntityFunc func(client *TempmailSDK, entopts map[string]any) TempmailEntity

var NewWebhookEntityFunc func(client *TempmailSDK, entopts map[string]any) TempmailEntity

