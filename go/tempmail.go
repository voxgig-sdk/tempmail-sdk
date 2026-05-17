package voxgigtempmailsdk

import (
	"github.com/voxgig-sdk/tempmail-sdk/go/core"
	"github.com/voxgig-sdk/tempmail-sdk/go/entity"
	"github.com/voxgig-sdk/tempmail-sdk/go/feature"
	_ "github.com/voxgig-sdk/tempmail-sdk/go/utility"
)

// Type aliases preserve external API.
type TempmailSDK = core.TempmailSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TempmailEntity = core.TempmailEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TempmailError = core.TempmailError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDomainEntityFunc = func(client *core.TempmailSDK, entopts map[string]any) core.TempmailEntity {
		return entity.NewDomainEntity(client, entopts)
	}
	core.NewEmailEntityFunc = func(client *core.TempmailSDK, entopts map[string]any) core.TempmailEntity {
		return entity.NewEmailEntity(client, entopts)
	}
	core.NewInboxEntityFunc = func(client *core.TempmailSDK, entopts map[string]any) core.TempmailEntity {
		return entity.NewInboxEntity(client, entopts)
	}
	core.NewMessageEntityFunc = func(client *core.TempmailSDK, entopts map[string]any) core.TempmailEntity {
		return entity.NewMessageEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.TempmailSDK, entopts map[string]any) core.TempmailEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTempmailSDK = core.NewTempmailSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
