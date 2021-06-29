from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'


# username = serializers.SerializerMethodField('get_username')
# has_owner_permissions = serializers.SerializerMethodField('get_owner_status')
# owner = serializers.ReadOnlyField(source='user.username')
#
# def get_owner_status(self, obj):
#     return obj.username == self.context['request'].user
#
# def get_username(self, obj):
#     return obj.username.username
