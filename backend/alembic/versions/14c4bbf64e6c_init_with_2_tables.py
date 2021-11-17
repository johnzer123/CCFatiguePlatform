"""init with 2 tables

Revision ID: 14c4bbf64e6c
Revises:
Create Date: 2021-11-12 15:44:43.508318

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '14c4bbf64e6c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        'experience',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('laboratory', sa.String(), nullable=True),
        sa.Column('researcher', sa.String(), nullable=True),
        sa.Column('experiment_type', sa.String(), nullable=True),
        sa.Column('publication_title', sa.String(), nullable=True),
        sa.Column('publication_doi', sa.String(), nullable=True),
        sa.Column('geometry_length', sa.Integer(), nullable=True),
        sa.Column('geometry_width', sa.Integer(), nullable=True),
        sa.Column('geometry_thickness', sa.Integer(), nullable=True),
        sa.Column('laminates_and_assemblies_curing_time', sa.Integer(), nullable=True),
        sa.Column('laminates_and_assemblies_curing_temperature', sa.Integer(), nullable=True),
        sa.Column('laminates_and_assemblies_curing_pressure', sa.Integer(), nullable=True),
        sa.Column('laminates_and_assemblies_fiber_content', sa.Integer(), nullable=True),
        sa.Column('laminates_and_assemblies_stacking_sequence', sa.String(), nullable=True),

        sa.PrimaryKeyConstraint('id')
    )
    op.create_table(
        'test',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('experience_id', sa.Integer(), nullable=True),
        sa.Column('specimen_number', sa.String(), nullable=True),
        sa.Column('number_of_cycles_to_failure', sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(['experience_id'], ['experience.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('test')
    op.drop_table('experience')
    # ### end Alembic commands ###