# Tempmail SDK utility: feature_add
module TempmailUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
