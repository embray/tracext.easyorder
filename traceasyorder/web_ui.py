from trac.core import Component
from trac.web.api import IRequestFilter
from trac.web.chrom import ITemplateProvider


class EasyOrderModule(Component):
    implements(IRequestFilter, ITemplateProvider)

    # IRequestFilter methods
    def pre_process_request(self, req, handler):
        return handler

    def post_process_request(self, req, template, data, content_type):
        return template, data, content_type

    # ITemplateProvider methods
    def get_htdocs_dirs(self):
        return ()

    def get_templates_dirs(self):
        return()
