# Tempmail SDK utility: make_context

from core.context import TempmailContext


def make_context_util(ctxmap, basectx):
    return TempmailContext(ctxmap, basectx)
