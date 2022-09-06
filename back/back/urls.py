from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urls_api = [

]

urlpatterns = [
    # page de garde temporaire
    # path('', TemplateView.as_view(template_name='home.html'), name="home"),

    # page admin
    path('admin/', admin.site.urls),
    # authentification et inscription

    # TODO Regler le problème de no_reverse_match sur les urls de reset de mdp
    # path('dj-rest-auth/password/reset/', PasswordResetView.as_view(), name='rest_password_reset'),
    # path('dj-rest-auth/password/reset/confirm/', PasswordResetConfirmView.as_view(),
    #      name='rest_password_reset_confirm'),

   
]
# path('', TemplateView.as_view(template_name='swagger-ui.html'), name='Docs API'),
