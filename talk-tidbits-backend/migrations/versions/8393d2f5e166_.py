"""empty message

Revision ID: 8393d2f5e166
Revises: 70142e7867a1
Create Date: 2023-03-28 04:21:41.753198

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8393d2f5e166'
down_revision = '70142e7867a1'
branch_labels = None
depends_on = None


def upgrade():
    pass
    # ### commands auto generated by Alembic - please adjust! ###
    # with op.batch_alter_table('transcriptions', schema=None) as batch_op:
    #     batch_op.add_column(sa.Column('transcription_source', sa.Enum('local', 'openai', name='transcription_source_enum'), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    pass
    # ### commands auto generated by Alembic - please adjust! ###
    # with op.batch_alter_table('transcriptions', schema=None) as batch_op:
    #     batch_op.drop_column('transcription_source')

    # ### end Alembic commands ###