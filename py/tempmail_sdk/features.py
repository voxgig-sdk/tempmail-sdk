# Tempmail SDK feature factory

from tempmail_sdk.feature.base_feature import TempmailBaseFeature
from tempmail_sdk.feature.test_feature import TempmailTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TempmailBaseFeature(),
        "test": lambda: TempmailTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
